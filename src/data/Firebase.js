import firebase from 'firebase';
import config from '../../firebase.config';
import uid from 'uid';

firebase.initializeApp(config);

const db = firebase.database();

const getCompaniesRef = db.ref('companies/');
const getPortfoliosRef = db.ref('portfolios/');
const getProjectsRef = db.ref('projects/');
const getSkillsRef = db.ref('skills/');

export const getCompanies = new Promise((resolve) => {
  getCompaniesRef.on('value', (snapshot) => {
    resolve(snapshot.val());
  });
});

export const getPortfolios = new Promise((resolve) => {
  getPortfoliosRef.on('value', (snapshot) => {
    resolve(snapshot.val());
  });
});

export const getProjects = new Promise((resolve) => {
  getProjectsRef.on('value', (snapshot) => {
    resolve(snapshot.val());
  });
});

export const getSkills = new Promise((resolve) => {
  getSkillsRef.on('value', (snapshot) => {
    resolve(snapshot.val());
  });
});

export const sendMessage = (name, email, message) => {
  const id = uid();
  db.ref(`messages/${id}`).set({
    id, name, email, message,
  });
};
