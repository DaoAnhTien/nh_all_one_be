const mongoose = require('mongoose');

const NAME_TO_IMAGE_URL = {
  '하나은행': 'assets/images/bank/bank_hana.png',
  '국민은행': 'assets/images/bank/bank_kb.png',
  '신한은행': 'assets/images/bank/bank_shinhan.png',
  '우리은행': 'assets/images/bank/bank_woori.png',
  '농협': 'assets/images/bank/bank_nh.png',
  '기업은행': 'assets/images/bank/bank_ibk.png',
  '카카오뱅크': 'assets/images/bank/bank_kakao.png',
  '토스뱅크': 'assets/images/bank/toss_bank.png',
  '케이뱅크': 'assets/images/bank/k_bank.png',
  '수협': 'assets/images/bank/suhyup_bank.png',
  '부산은행': 'assets/images/bank/bnk_busan_bank.png',
  '경남은행': 'assets/images/bank/bnk_kyongnam_bank.png',
  'iM뱅크(구)대구': 'assets/images/bank/im_bank.png',
  '광주은행': 'assets/images/bank/gwangju_bank.png',
  '전북은행': 'assets/images/bank/jb_bank.png',
  '제주은행': 'assets/images/bank/jeju_bank.png',
  'SC제일은행': 'assets/images/bank/bank_sc.png',
  '한국씨티은행': 'assets/images/bank/bank_citi.png',
  '우체국': 'assets/images/bank/korea_post.png',
  '새마을금고': 'assets/images/bank/mg_community_credit.png',
  '신협': 'assets/images/bank/national_credit_union.png',
  '상호저축은행': 'assets/images/bank/savings_bank.png',
  '산림조합중앙회': 'assets/images/bank/nfcf.png',
  '산업은행': 'assets/images/bank/bank_kdb.png',
  '도이치은행': 'assets/images/bank/deutsche_bank.png',
  '뱅크오브아메리카': 'assets/images/bank/bank_of_america.png',
  'BNP파리바은행': 'assets/images/bank/bnp_paribas.png',
  'HSBC은행': 'assets/images/bank/hsbc.png',
  'JP모건체이스': 'assets/images/bank/jpmorgan_chase_bank.png',
  '중국은행': 'assets/images/bank/bank_of_china.png',
  '중국건설은행': 'assets/images/bank/cc_bank.png',
  '중국공상은행': 'assets/images/bank/icbc.png',
  '국세': 'assets/images/bank/bank_national_tax.png',
  '지방세입': 'assets/images/bank/bank_local_tax.png',
  '관세': 'assets/images/bank/bank_customs.png',
};

async function run() {
  const uri = process.env.MONGODB_URI || 'mongodb+srv://daoanhtien232001_db_user:j1H0kU3Ffzqh3Q6y@cluster0.y32gcix.mongodb.net';
  await mongoose.connect(uri);
  console.log('Connected to MongoDB Atlas');

  const db = mongoose.connection;
  const banksCol = db.collection('banks');
  const walletsCol = db.collection('wallets');
  const txCol = db.collection('transactions');

  // 1. Update banks collection
  for (const [name, imageUrl] of Object.entries(NAME_TO_IMAGE_URL)) {
    const res = await banksCol.updateOne(
      { name },
      { $set: { imageUrl, updatedAt: new Date() } }
    );
    console.log(`Updated bank [${name}] -> ${imageUrl} (matched: ${res.matchedCount})`);
  }

  // 2. Update wallets collection
  const walletRes = await walletsCol.updateMany(
    {},
    { $set: { imageUrl: 'assets/images/bank/suhyup_bank.png', updatedAt: new Date() } }
  );
  console.log(`Updated ${walletRes.modifiedCount} wallets imageUrl to suhyup_bank.png`);

  // 3. Update transactions collection
  const txs = await txCol.find({}).toArray();
  for (const tx of txs) {
    const paymentBank = { ...tx.paymentBank };
    const beneficiaryBank = { ...tx.beneficiaryBank };

    if (NAME_TO_IMAGE_URL[paymentBank.name]) {
      paymentBank.imageUrl = NAME_TO_IMAGE_URL[paymentBank.name];
    } else if (paymentBank.bankCode === 'SH' || paymentBank.bankCode === 'SUHYUP') {
      paymentBank.imageUrl = 'assets/images/bank/suhyup_bank.png';
    }

    if (NAME_TO_IMAGE_URL[beneficiaryBank.name]) {
      beneficiaryBank.imageUrl = NAME_TO_IMAGE_URL[beneficiaryBank.name];
    } else if (beneficiaryBank.bankCode === 'SH' || beneficiaryBank.bankCode === 'SUHYUP') {
      beneficiaryBank.imageUrl = 'assets/images/bank/suhyup_bank.png';
    }

    await txCol.updateOne(
      { _id: tx._id },
      { $set: { paymentBank, beneficiaryBank, updatedAt: new Date() } }
    );
  }
  console.log(`Updated ${txs.length} transactions image URLs.`);

  await mongoose.disconnect();
  console.log('Done!');
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
