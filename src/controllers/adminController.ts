import { Request, Response } from "express";
import { Tender, Bid, User } from "../models";
import { Op } from "sequelize";

export const getTenderApplicants = async (req: Request, res: Response) => {
  try {
    const tenderId = req.params.id;
    const { minPrice, maxPrice, minExperience } = req.query;

    const whereClause: any = { tenderId };
    if (minPrice) whereClause.price = { [Op.gte]: minPrice };
    if (maxPrice)
      whereClause.price = { ...whereClause.price, [Op.lte]: maxPrice };
    if (minExperience)
      whereClause.companyExperience = { [Op.gte]: minExperience };

    const bids = await Bid.findAll({
      where: whereClause,
      include: [{ model: User, attributes: ["id", "username", "email"] }],
      order: [
        ["price", "DESC"],
        ["companyExperience", "DESC"],
      ],
    });

    res.json(bids);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tender applicants", error });
  }
};
