import { Request, Response } from "express";
import { Bid, Tender, User } from "../models";

export const listTenders = async (req: Request, res: Response) => {
  try {
    let fillter =
      req["user"].role === "user"
        ? {
            include: [
              {
                required: false,
                model: Bid,
                as: "tender",
                where: {
                  userId: req["user"].userId,
                },
              },
              {
                required: false,
                model: User,
                attributes: { exclude: ["password"] },
              },
            ],
          }
        : {
            include: {
              required: false,
              model: User,
              attributes: { exclude: ["password"] },
            },
          };
    const tenders = await Tender.findAll({ ...fillter });
    res.json(tenders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tenders", error });
  }
};

export const getTenderDetails = async (req: Request, res: Response) => {
  try {
    const tender = await Tender.findByPk(req.params.id);
    if (!tender) {
      return res.status(404).json({ message: "Tender not found" });
    }
    res.json(tender);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tender details", error });
  }
};
export const getuserDetails = async (req: Request, res: Response) => {
  try {
    const tender = await User.findAll({ where: { role: "user" } });

    if (!tender) {
      return res.status(404).json({ message: "Tender not found" });
    }
    res.json(tender);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tender details", error });
  }
};
