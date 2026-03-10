import prisma from './prisma';

export interface LogParams {
  userId?: number;
  adminId?: number;
  action: string;
  entityType: string;
  entityId?: number;
  description: string;
  ipAddress?: string;
  userAgent?: string;
}

export async function createActivityLog(params: LogParams) {
  try {
    const log = await prisma.activityLog.create({
      data: {
        userId: params.userId ?? null,
        adminId: params.adminId ?? null,
        action: params.action,
        entityType: params.entityType,
        entityId: params.entityId ?? null,
        description: params.description,
        ipAddress: params.ipAddress ?? null,
        userAgent: params.userAgent ?? null,
      }
    });
    return log;
  } catch (error) {
    console.error('Error creating activity log:', error);
  }
}
