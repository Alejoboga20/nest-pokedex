import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeAPIResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios; //axios is a dependency for my service

  async executeSeed() {
    const { data } = await axios.get<PokeAPIResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=150',
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      console.log({ name, no });
    });
    return data.results;
  }
}
