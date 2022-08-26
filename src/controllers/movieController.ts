import { Request, Response } from 'express';
import { movieRepository } from '../repositories/movieRepository';

export const create = async (req: Request, res: Response) => {
  const { title, genre } = req.body;
  if (!title || !genre)
    return res.status(400).json({ message: 'the field is empty.' });
  try {
    const newMovie = movieRepository.create({ title, genre });
    await movieRepository.save(newMovie);
    return res.status(201).json(newMovie);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
