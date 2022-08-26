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

export const listAll = async (req: Request, res: Response) => {
  try {
    const movies = await movieRepository.find();
    await movieRepository.save(movies);
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const listById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const movieId = await movieRepository.findOne({
      where: { id: Number(id) },
    });
    if (!movieId) return res.status(404).json({ message: 'movie not found.' });
    await movieRepository.save(movieId);
    return res.status(200).json(movieId);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const movieId = await movieRepository.findOne({
      where: { id: Number(id) },
    });
    if (!movieId) return res.status(404).json({ message: 'movie not found.' });
    await movieRepository.save(movieId);

    await movieRepository.update(Number(id), req.body);
    return res.status(200).json({message: "movie updated!"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
