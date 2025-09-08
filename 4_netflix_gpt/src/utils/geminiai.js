import { GoogleGenAI } from '@google/genai';
import { GENAI_KEY } from './constants';

const ai = new GoogleGenAI({ apiKey: GENAI_KEY });

export default ai;
