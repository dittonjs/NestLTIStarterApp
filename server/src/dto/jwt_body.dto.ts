import { RoleKey } from "@prisma/client";

export interface JwtBodyDto {
  userId: number;
  contextId: string;
  roles: RoleKey[];
  contentItemReturnUrl?: string;
}
