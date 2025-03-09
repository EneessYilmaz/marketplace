import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

describe('AppController', () => {
  let app: INestApplication;
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    controller = app.get<AppController>(AppController);
    expect(controller).toBeDefined();
  });

  it('should return "Hello World!" when GET /app is called', async () => {
    return request(app.getHttpServer())
      .get('/app')
      .expect(200)
      .expect('Hello Worlds!');
  });
});
