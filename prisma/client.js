const { PrismaClient } = require('@prisma/client');

class PrismaSingleton {
  constructor() {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new PrismaClient();
    }
  }

  getInstance() {
    return PrismaSingleton.instance;
  }
}

export const prisma = new PrismaSingleton().getInstance();
