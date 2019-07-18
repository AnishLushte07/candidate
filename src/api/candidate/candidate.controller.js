const xlsx =require('node-xlsx');
const moment = require('moment');

const db = require('../../conn/sqldb');

const { Candidate } = db;

async function create(req, res, next) {
  try {
    const {
      name, mobile, email, source, referredBy, interviewLocation,
      interviewDate,
    } = req.body;

    await Candidate.create({
      name,
      mobile,
      email,
      source,
      referred_by: referredBy,
      interview_location: interviewLocation,
      interview_date: interviewDate,
    });

    return res.sendStatus(201);
  } catch (err) {
    return next(err);
  }
}

async function download(req, res, next) {
  try {
    const candidates = await Candidate.findAll({});

    const cols = [
      'name', 'email', 'mobile', 'source', 'referred_by',
      'interview_location', 'interview_date', 'created_on',
    ];

    const header = [
      'Name', 'Email', 'Mobile', 'Source', 'Referred By',
      'Interview Location', 'Interview Date', 'Created On',
    ];

    const excel = xlsx.build([{
      name: 'Candidates',
      data: [header].concat(candidates.map(row => cols.map(col => row[col]))),
    }]);

    console.log([header].concat(candidates.map(row => cols.map(col => row[col]))));

    res.setHeader('Content-Type', 'application/vnd.openxmlformats');

    res.setHeader(
      'Content-disposition',
      `attachment; filename=candidate${moment().format('DD-MM-YYYY')}.xlsx`);

    return res.end(excel, 'binary');
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  create,
  download,
};
