import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Injectable()
export class NonceService {
  constructor(private prisma: PrismaService) {}

  async validate(nonce: string): Promise<boolean> {
    try {
      await this.prisma.nonce.create({
        data: {
          nonce,
        },
      });
    } catch (e) {
      return false;
    }
    return true;
  }
}
