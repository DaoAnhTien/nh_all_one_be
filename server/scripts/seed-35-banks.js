const mongoose = require('mongoose');

const ALL_35_BANKS = [
  // ── Hàng 1 ──────────────────────────────────
  {
    code: 'KBANK',
    name: 'K Bank',
    shortName: 'K bank',
    binCode: '089',
    color: '#00E676',
    imageUrl: 'assets/images/bank/k_bank.png',
    order: 1,
    isActive: true,
  },
  {
    code: 'TOSS',
    name: 'Toss Bank',
    shortName: 'Toss Bank',
    binCode: '092',
    color: '#0064FF',
    imageUrl: 'assets/images/bank/toss_bank.png',
    order: 2,
    isActive: true,
  },
  // ── Hàng 2 ──────────────────────────────────
  {
    code: 'KYONGNAM',
    name: 'BNK Kyongnam Bank',
    shortName: 'BNK Kyongnam Bank',
    binCode: '039',
    color: '#C51D24',
    imageUrl: 'assets/images/bank/bnk_kyongnam_bank.png',
    order: 3,
    isActive: true,
  },
  {
    code: 'KWANGJU',
    name: 'Gwangju Bank',
    shortName: 'Gwangju Bank',
    binCode: '034',
    color: '#003882',
    imageUrl: 'assets/images/bank/gwangju_bank.png',
    order: 4,
    isActive: true,
  },
  // ── Hàng 3 ──────────────────────────────────
  {
    code: 'DGB',
    name: 'iM Bank',
    shortName: 'iM Bank',
    binCode: '031',
    color: '#0077C8',
    imageUrl: 'assets/images/bank/im_bank.png',
    order: 5,
    isActive: true,
  },
  {
    code: 'BUSAN',
    name: 'BNK Busan Bank',
    shortName: 'BNK Busan Bank',
    binCode: '032',
    color: '#E30613',
    imageUrl: 'assets/images/bank/bnk_busan_bank.png',
    order: 6,
    isActive: true,
  },
  // ── Hàng 4 ──────────────────────────────────
  {
    code: 'JEONBUK',
    name: 'Jeonbuk Bank',
    shortName: 'JB Bank',
    binCode: '037',
    color: '#004B9B',
    imageUrl: 'assets/images/bank/jb_bank.png',
    order: 7,
    isActive: true,
  },
  {
    code: 'SH',
    name: 'Suhyup Bank',
    shortName: 'Suhyup',
    binCode: '007',
    color: '#005596',
    imageUrl: 'assets/images/bank/suhyup_bank.png',
    order: 8,
    isActive: true,
  },
  // ── Hàng 5 ──────────────────────────────────
  {
    code: 'JEJU',
    name: 'Jeju Bank',
    shortName: 'Jeju Bank',
    binCode: '035',
    color: '#004B9B',
    imageUrl: 'assets/images/bank/jeju_bank.png',
    order: 9,
    isActive: true,
  },
  {
    code: 'KMSFC',
    name: 'National Forestry Cooperative Federation',
    shortName: 'NFCF',
    binCode: '064',
    color: '#2E7D32',
    imageUrl: 'assets/images/bank/nfcf.png',
    order: 10,
    isActive: true,
  },
  // ── Hàng 6 ──────────────────────────────────
  {
    code: 'CU',
    name: 'National Credit Union Federation',
    shortName: 'Credit Union',
    binCode: '048',
    color: '#004380',
    imageUrl: 'assets/images/bank/national_credit_union.png',
    order: 11,
    isActive: true,
  },
  {
    code: 'KFCC',
    name: 'MG Community Credit Cooperatives',
    shortName: 'MG Community Credit',
    binCode: '045',
    color: '#005DAA',
    imageUrl: 'assets/images/bank/mg_community_credit.png',
    order: 12,
    isActive: true,
  },
  // ── Hàng 7 ──────────────────────────────────
  {
    code: 'POST',
    name: 'Korea Post',
    shortName: 'Korea Post',
    binCode: '071',
    color: '#ED1C24',
    imageUrl: 'assets/images/bank/korea_post.png',
    order: 13,
    isActive: true,
  },
  {
    code: 'SAVING',
    name: 'Savings Bank',
    shortName: 'Savings Bank',
    binCode: '050',
    color: '#E63946',
    imageUrl: 'assets/images/bank/savings_bank.png',
    order: 14,
    isActive: true,
  },
  // ── Hàng 8 ──────────────────────────────────
  {
    code: 'DEUTSCHE',
    name: 'Deutsche Bank',
    shortName: 'Deutsche Bank',
    binCode: '055',
    color: '#0018A8',
    imageUrl: 'assets/images/bank/deutsche_bank.png',
    order: 15,
    isActive: true,
  },
  {
    code: 'BOA',
    name: 'Bank of America',
    shortName: 'Bank of America',
    binCode: '060',
    color: '#E31837',
    imageUrl: 'assets/images/bank/bank_of_america.png',
    order: 16,
    isActive: true,
  },
  // ── Hàng 9 ──────────────────────────────────
  {
    code: 'ICBC',
    name: 'Industrial and Commercial Bank of China',
    shortName: 'ICBC',
    binCode: '062',
    color: '#C7000B',
    imageUrl: 'assets/images/bank/icbc.png',
    order: 17,
    isActive: true,
  },
  {
    code: 'BOC',
    name: 'Bank of China',
    shortName: 'Bank of China',
    binCode: '063',
    color: '#B22222',
    imageUrl: 'assets/images/bank/bank_of_china.png',
    order: 18,
    isActive: true,
  },
  // ── Hàng 10 ─────────────────────────────────
  {
    code: 'CCB',
    name: 'China Construction Bank',
    shortName: 'CC Bank',
    binCode: '067',
    color: '#003B82',
    imageUrl: 'assets/images/bank/cc_bank.png',
    order: 19,
    isActive: true,
  },
  {
    code: 'BNP',
    name: 'BNP Paribas',
    shortName: 'BNP Paribas',
    binCode: '061',
    color: '#00965E',
    imageUrl: 'assets/images/bank/bnp_paribas.png',
    order: 20,
    isActive: true,
  },
  // ── Hàng 11 ─────────────────────────────────
  {
    code: 'HSBC',
    name: 'HSBC',
    shortName: 'HSBC',
    binCode: '054',
    color: '#DB0011',
    imageUrl: 'assets/images/bank/hsbc.png',
    order: 21,
    isActive: true,
  },
  {
    code: 'JPMORGAN',
    name: 'JPMorgan Chase Bank',
    shortName: 'JPMorgan Chase',
    binCode: '057',
    color: '#111111',
    imageUrl: 'assets/images/bank/jpmorgan_chase_bank.png',
    order: 22,
    isActive: true,
  },
  // ── Hàng 12 (Ngân hàng mặc định ứng dụng) ──
  {
    code: 'NH',
    name: 'NH Bank',
    shortName: 'NH Bank',
    binCode: '011',
    color: '#00A062',
    imageUrl: 'assets/images/bank/nh_bank.png',
    order: 23,
    isActive: true,
  },
];

async function run() {
  const uri = process.env.MONGODB_URI || 'mongodb+srv://daoanhtien232001_db_user:j1H0kU3Ffzqh3Q6y@cluster0.y32gcix.mongodb.net';
  await mongoose.connect(uri);
  console.log('Connected to MongoDB Atlas');

  const collection = mongoose.connection.collection('banks');

  // Xóa bank SUHYUP cũ nếu còn tồn tại để tránh trùng lặp với SH
  await collection.deleteOne({ code: 'SUHYUP' });

  for (const bank of ALL_35_BANKS) {
    await collection.updateOne(
      { code: bank.code },
      {
        $set: {
          code: bank.code,
          name: bank.name,
          shortName: bank.shortName,
          binCode: bank.binCode,
          color: bank.color,
          imageUrl: bank.imageUrl,
          order: bank.order,
          isActive: bank.isActive,
          updatedAt: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true }
    );
  }

  // Xóa toàn bộ các ngân hàng ngoài 22 ngân hàng hợp lệ
  const validCodes = ALL_35_BANKS.map((b) => b.code);
  const deleteRes = await collection.deleteMany({ code: { $nin: validCodes } });
  console.log(`Deleted ${deleteRes.deletedCount} excess banks from DB.`);

  const total = await collection.countDocuments();
  console.log(`Total banks in collection: ${total}`);

  const banks = await collection.find({}).sort({ order: 1 }).toArray();
  console.log('--- List of Banks in DB (Sorted by order) ---');
  banks.forEach((b) => {
    console.log(`[#${String(b.order).padStart(2, ' ')}] ${b.code.padEnd(10)} | ${b.name.padEnd(14)} | ${b.imageUrl}`);
  });

  await mongoose.disconnect();
  console.log('Finished successfully.');
  process.exit(0);
}

run().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
