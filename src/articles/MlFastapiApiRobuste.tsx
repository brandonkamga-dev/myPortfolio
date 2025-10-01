import ArticleLayout from './ArticleLayout';
import CodeBlock from '../components/CodeBlock';
import { 
  ArticleSection, 
  ArticleNote, 
  ArticleInlineCode,
  ArticleDivider,
  ArticleLead
} from '../components/ArticleComponents';

const projectStructure = `
ml-api/
├── app/
│   ├── main.py
│   ├── models/
│   ├── routers/
│   └── services/
├── requirements.txt
└── Dockerfile
`;

const implementationExample = `
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="ML API", version="1.0.0")

# Charger le modèle
model = joblib.load("model.pkl")

class PredictionRequest(BaseModel):
    features: list[float]

class PredictionResponse(BaseModel):
    prediction: float
    confidence: float

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    try:
        features = np.array(request.features).reshape(1, -1)
        prediction = model.predict(features)[0]
        confidence = model.predict_proba(features).max()
        
        return PredictionResponse(
            prediction=prediction,
            confidence=confidence
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
`;

const dockerfileExample = `
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
`;

const MlFastapiApiRobuste = () => (
  <ArticleLayout>
    <h1>Machine Learning avec FastAPI</h1>
    
    <ArticleLead>
      FastAPI est devenu l'un des frameworks les plus populaires pour créer des APIs de machine learning 
      performantes et robustes, combinant simplicité d'utilisation et performance exceptionnelle.
    </ArticleLead>

    <ArticleNote type="info">
      <strong>Prérequis :</strong> Connaissances de base en Python, concepts de machine learning, 
      et familiarité avec les APIs REST.
    </ArticleNote>

    <ArticleDivider />

    <ArticleSection>
      <h2>Pourquoi FastAPI pour le ML ?</h2>
      
      <p>
        FastAPI se distingue par ses caractéristiques uniques qui en font un choix idéal 
        pour les applications de machine learning en production :
      </p>

      <ul>
        <li><strong>Performance exceptionnelle</strong> : Basé sur Starlette et Pydantic, rivalise avec Node.js et Go</li>
        <li><strong>Documentation automatique</strong> : Swagger UI et ReDoc générés automatiquement</li>
        <li><strong>Validation robuste</strong> : Type hints Python pour une validation stricte des données</li>
        <li><strong>Support asynchrone</strong> : Gestion native de l'async/await pour les opérations concurrentes</li>
        <li><strong>Écosystème riche</strong> : Compatible avec tous les outils Python ML (scikit-learn, TensorFlow, PyTorch)</li>
      </ul>

      <ArticleNote type="success">
        <strong>Performance :</strong> FastAPI peut traiter jusqu'à 65 000 requêtes par seconde, 
        ce qui en fait l'un des frameworks Python les plus rapides.
      </ArticleNote>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection background>
      <h2>Structure du projet</h2>
      
      <p>
        Une organisation claire du projet est essentielle pour maintenir et faire évoluer 
        votre API de machine learning :
      </p>
      
      <CodeBlock language="bash">{projectStructure}</CodeBlock>

      <p>
        Cette structure sépare clairement les responsabilités : les modèles ML, 
        les routes API, et les services métier.
      </p>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection>
      <h2>Exemple d'implémentation</h2>
      
      <p>
        Voici un exemple complet d'API de prédiction avec validation des données, 
        gestion d'erreurs et réponses structurées :
      </p>
      
      <CodeBlock language="python">{implementationExample}</CodeBlock>

      <ArticleNote type="warning">
        <strong>Sécurité :</strong> En production, ajoutez toujours une authentification 
        et une limitation du taux de requêtes pour protéger votre API.
      </ArticleNote>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection background>
      <h2>Déploiement avec Docker</h2>
      
      <p>
        Docker facilite le déploiement et garantit la cohérence entre les environnements 
        de développement et de production :
      </p>
      
      <CodeBlock language="dockerfile">{dockerfileExample}</CodeBlock>

      <p>
        Cette configuration Docker optimise la taille de l'image et les performances 
        en utilisant une image Python slim et en installant uniquement les dépendances nécessaires.
      </p>

      <ArticleNote type="info">
        <strong>Optimisation :</strong> Pour des modèles volumineux, considérez l'utilisation 
        d'images multi-stage pour réduire la taille finale de l'image Docker.
      </ArticleNote>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection>
      <h2>Conclusion</h2>
      
      <p>
        FastAPI offre une excellente base pour créer des APIs de machine learning robustes et performantes. 
        Sa combinaison de performance, de simplicité et de fonctionnalités avancées en fait un choix 
        optimal pour mettre en production vos modèles ML.
      </p>

      <p>
        Les fonctionnalités comme la documentation automatique, la validation des types, 
        et le support asynchrone permettent de créer des APIs professionnelles rapidement 
        tout en maintenant une haute qualité de code.
      </p>

      <ArticleNote type="success">
        <strong>Prochaines étapes :</strong> Explorez les middlewares FastAPI pour ajouter 
        la journalisation, la surveillance, et la mise en cache à votre API ML.
      </ArticleNote>
    </ArticleSection>
  </ArticleLayout>
);

export default MlFastapiApiRobuste;

