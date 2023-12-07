import { Injectable} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService extends PrismaClient {
  constructor(configService: ConfigService) {
    //输出查询SQL等LOG
    super(
      configService.getOrThrow('app.isDev')
        ? {
            log: [
              {
                emit: 'event',
                level: 'query' as const,
              },
              {
                emit: 'stdout',
                level: 'error',
              },
              {
                emit: 'stdout',
                level: 'info',
              },
              {
                emit: 'stdout',
                level: 'warn',
              },
            ],
          }
        : undefined,
    );
    //@ts-ignore
    this.$on('query', async (e) => {
      //@ts-ignore
      let timestamp = new Date();
      //@ts-ignore
      let query = e.query;
      //@ts-ignore
      let params = JSON.parse(e.params);
      //@ts-ignore
      let duration = e.duration;
      console.log({
        Timestamp: timestamp,
        Query: query,
        Params: params,
        Duration: duration,
      });
    });
  }
}
