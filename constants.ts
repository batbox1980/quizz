
import type { Question } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    questionText: 'Qui a reçu les Dix Commandements de Dieu sur le mont Sinaï ?',
    options: ['Abraham', 'Moïse', 'David', 'Noé'],
    correctAnswerIndex: 1,
    explanation: 'Moïse est le prophète qui a reçu les Dix Commandements de Dieu, qui sont les fondements de la loi morale pour les juifs et les chrétiens.'
  },
  {
    questionText: "Quel est le sacrement qui lave du péché originel et marque l'entrée dans la communauté chrétienne ?",
    options: ['La Confirmation', "L'Eucharistie", 'Le Baptême', 'Le Mariage'],
    correctAnswerIndex: 2,
    explanation: "Le Baptême est le premier des sacrements de l'initiation chrétienne. Il nous purifie du péché originel et nous fait enfants de Dieu."
  },
  {
    questionText: 'Combien y a-t-il de livres d\'Évangiles dans le Nouveau Testament ?',
    options: ['Un', 'Deux', 'Quatre', 'Douze'],
    correctAnswerIndex: 2,
    explanation: "Il y a quatre Évangiles canoniques : Matthieu, Marc, Luc et Jean. Ils racontent la vie, l'enseignement, la mort et la résurrection de Jésus."
  },
  {
    questionText: 'Qui est considéré comme le premier Pape de l\'Église catholique ?',
    options: ['Saint Paul', 'Saint Jean', 'Saint Pierre', 'Saint Augustin'],
    correctAnswerIndex: 2,
    explanation: "Jésus a dit à Pierre : 'Tu es Pierre, et sur cette pierre je bâtirai mon Église'. Il est donc considéré comme le premier Pape."
  },
  {
    questionText: 'Que signifie le mot "Évangile" ?',
    options: ['Bonne Nouvelle', 'Loi Ancienne', 'Chant de louange', 'Parole de Sage'],
    correctAnswerIndex: 0,
    explanation: 'Le mot "Évangile" vient du grec et signifie "Bonne Nouvelle", en référence au message de salut apporté par Jésus Christ.'
  },
  {
    questionText: 'Quelle est la prière que Jésus a enseignée à ses disciples ?',
    options: ['Le Je vous salue Marie', 'Le Credo', 'Le Notre Père', 'Le Gloire à Dieu'],
    correctAnswerIndex: 2,
    explanation: "Le 'Notre Père' est la prière que Jésus lui-même a enseignée à ses disciples lorsqu'ils lui ont demandé comment prier."
  },
  {
    questionText: 'Quel événement les chrétiens célèbrent-ils à Pâques ?',
    options: ['La naissance de Jésus', 'La Cène', 'La résurrection de Jésus', 'La Pentecôte'],
    correctAnswerIndex: 2,
    explanation: 'Pâques est la fête la plus importante du christianisme. Elle célèbre la résurrection de Jésus, sa victoire sur la mort.'
  },
  {
    questionText: "Quelle est la vertu chrétienne qui consiste à aimer son prochain de manière désintéressée ?",
    options: ['La Foi', "L'Espérance", 'La Charité', 'La Prudence'],
    correctAnswerIndex: 2,
    explanation: "La Charité est la plus grande des trois vertus théologales (Foi, Espérance, Charité). C'est l'amour de Dieu et du prochain."
  },
  {
    questionText: 'Comment appelle-t-on le mystère d\'un seul Dieu en trois personnes : le Père, le Fils et le Saint-Esprit ?',
    options: ['La Trinité', 'La Transfiguration', "L'Incarnation", 'La Rédemption'],
    correctAnswerIndex: 0,
    explanation: 'La Sainte Trinité est le dogme central de la foi chrétienne : un Dieu unique qui existe en trois personnes distinctes mais consubstantielles.'
  },
  {
    questionText: 'Quel sacrement fortifie le don de l\'Esprit Saint reçu au baptême ?',
    options: ['La Pénitence', "L'Onction des malades", 'La Confirmation', "L'Eucharistie"],
    correctAnswerIndex: 2,
    explanation: "La Confirmation est le sacrement qui parfait la grâce du baptême, donnant la force de l'Esprit Saint pour être un témoin du Christ."
  }
];
