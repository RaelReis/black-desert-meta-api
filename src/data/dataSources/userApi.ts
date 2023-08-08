import { RESTDataSource } from "@apollo/datasource-rest";
import { User } from "../models/User";
import { Diary } from "../models/Diaries";
import { Weekly } from "../models/Weeklies";

export class UserApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  // Query's
  async getUser(id: string) {
    return this.get<User>(`/users/${id}`, { cacheOptions: { ttl: 60 } });
  }

  async getUsers(params: Record<string, string>) {
    return this.get<User[]>("/users", { params, cacheOptions: { ttl: 60 } });
  }

  async getDiaries(userId: string) {
    return this.get<Diary[]>("/diaries", {
      params: { userId },
      cacheOptions: { ttl: 60 },
    });
  }

  async createDiary(data: any) {
    return this.post<Diary[]>("/diaries", { body: data });
  }

  async updateDiary(diaryId: string, data: any) {
    return this.patch<Diary[]>(`/diaries/${diaryId}`, { body: data });
  }

  async deleteDiary(diaryId: string) {
    return this.delete<Diary[]>(`/diaries/${diaryId}`);
  }

  async getWeeklies(userId: string) {
    return this.get<Weekly[]>("/weeklies", {
      params: { userId },
      cacheOptions: { ttl: 60 },
    });
  }

  async createWeekly(data: any) {
    return this.post<Diary[]>("/weeklies", { body: data });
  }

  async updateWeekly(weeklyId: string, data: any) {
    return this.patch<Diary[]>(`/weeklies/${weeklyId}`, { body: data });
  }

  async deleteWeekly(weeklyId: string) {
    return this.delete<Diary[]>(`/weeklies/${weeklyId}`);
  }
}
