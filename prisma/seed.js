const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Inserindo tipos de corte na tabela CuttingType
    const cuttingTypes = [
        { type: 'Lisa' },
        { type: 'Serrilhada' },
        { type: 'Zig-Zag' }
    ];

    // Loop para criar cada CuttingType
    for (const cuttingType of cuttingTypes) {
        await prisma.cuttingType.create({
            data: cuttingType,
        });
    }

    console.log('Seed de CuttingType inserido com sucesso!');
}

main()
    .catch((e) => {
        console.error('Erro ao inserir seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
