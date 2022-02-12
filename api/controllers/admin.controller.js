const LanguagesModel = require("../models/languages.model");
const SkillsModel = require("../models/skills.model");

async function postSkills(req, res) {
  try {
    const skill = await SkillsModel.create(req.body);
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).send(`Error creating skill: ${error}`);
    throw new Error(`Error creating skill: ${error}`);
  }
}

async function deleteSkill(req, res) {
  try {
    const skill = await SkillsModel.findByIdAndDelete(req.params.skillId);
    res.status(200).json(`${skill.skills} has been delete`);
  } catch (error) {
    res.status(500).send(`Error deleting skill: ${error}`);
    throw new Error(`Error deleting skill: ${error}`);
  }
}

async function postLanguage(req, res) {
  try {
    const language = await LanguagesModel.create(req.body);
    res.status(200).json(language);
  } catch (error) {
    res.status(500).send(`Error creating language: ${error}`);
    throw new Error(`Error creating language: ${error}`);
  }
}

module.exports = {
  postSkills,
  deleteSkill,
  postLanguage
};
