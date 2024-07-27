import { Request, Response } from 'express';
import { Bid, Tender } from '../models';

export const submitBid = async (req: Request, res: Response) => {
  try {
    const { tenderId, price, companyExperience } = req.body;
    const userId = (req as any).user.id;
    const tender = await Tender.findByPk(tenderId);
    if (!tender || new Date() > tender.deadline) {
      return res.status(400).json({ message: 'Tender not found or deadline passed' });
    }
    const bid = await Bid.create({ tenderId, userId, price, companyExperience });
    res.status(201).json({ message: 'Bid submitted successfully', bidId: bid.id });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting bid', error });
  }
};