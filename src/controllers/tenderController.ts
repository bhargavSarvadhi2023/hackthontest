import { Request, Response } from 'express';
import { Tender } from '../models';

export const listTenders = async (req: Request, res: Response) => {
  try {
    const tenders = await Tender.findAll();
    res.json(tenders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tenders', error });
  }
};

export const getTenderDetails = async (req: Request, res: Response) => {
  try {
    const tender = await Tender.findByPk(req.params.id);
    if (!tender) {
      return res.status(404).json({ message: 'Tender not found' });
    }
    res.json(tender);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tender details', error });
  }
};