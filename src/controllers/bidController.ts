import { Request, Response } from "express";
import { Bid, Tender, User } from "../models";

export const submitBid = async (req: Request, res: Response) => {
  try {
    const {
      body: { tenderId, price, specialServicesOrProduct },
    } = req;
    const userId = (req as any).user.id;
    const tender = await Tender.findByPk(tenderId);
    if (!tender || new Date() > tender.endTime) {
      return res
        .status(400)
        .json({ message: "Tender not found or deadline passed" });
    }
    const bid = await Bid.create({
      tenderId,
      userId: req["user"].userId,
      amount: price,
      specialServicesOrProduct,
    });
    res
      .status(201)
      .json({ message: "Bid submitted successfully", bidId: bid.id });
  } catch (error) {
    res.status(500).json({ message: "Error submitting bid", error });
  }
};

export const getBidList = async (req: Request, res: Response) => {
  try {
    const {
      query: { is_filter },
    } = req;
    let fillter = {};
    if (is_filter && is_filter === "0") {
      fillter["order"] = [["amount", "DESC"]];
    }
    if (is_filter && is_filter === "1") {
      fillter["order"] = [[{ model: User, as: "user" }, "experience", "DESC"]];
    }
    if (is_filter && is_filter === "2") {
      fillter["order"] = [
        [{ model: User, as: "user" }, "completedProjects", "DESC"],
      ];
    }
    const bids = await Bid.findAll({
      include: [
        {
          model: User,
          as: "user",
        },
        {
          model: Tender,
          as: "tender",
          attributes: ["id", "title", "description"], // Adjust fields as needed
        },
      ],
      ...fillter,
    });
    res.status(200).json({ bids });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving bids", error: error.message });
  }
};

export const getBidWinner = async (req: Request, res: Response) => {
  try {
    const {
      body: { userid, tenderId },
    } = req;
    const add_winner = await Tender.update(
      { winnerId: userid },
      { where: { id: tenderId } }
    );
    res.json({ add_winner, message: "winner added successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error determining bid winner",
      error: (error as Error).message,
    });
  }
};
