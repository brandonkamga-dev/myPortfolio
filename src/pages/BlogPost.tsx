"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import useTranslation from "../hooks/useTranslation";

// Interface pour le contenu d'un article
interface BlogPostContent {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useTranslation();

  // Contenu des articles (à remplacer par du Markdown plus tard)
  const blogPosts: Record<string, BlogPostContent> = {
    "devops-moderne-github-actions": {
      id: "1",
      title: language === 'fr' 
        ? "Introduction au DevOps moderne : CI/CD avec GitHub Actions"
        : "Modern DevOps Introduction: CI/CD with GitHub Actions",
      content: language === 'fr' ? `
# Introduction au DevOps moderne

Le DevOps moderne nécessite une approche structurée pour l'intégration et le déploiement continus. GitHub Actions offre une solution puissante et flexible pour automatiser vos workflows.

## Qu'est-ce que GitHub Actions ?

GitHub Actions est une plateforme d'intégration et de déploiement continus (CI/CD) qui vous permet d'automatiser, de personnaliser et d'exécuter vos workflows de développement logiciel directement dans votre dépôt GitHub.

## Configuration de base

Pour commencer, créez un fichier \`.github/workflows/ci.yml\` dans votre projet :

\`\`\`yaml
name: CI/CD Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test
\`\`\`

## Bonnes pratiques

1. **Utilisez des secrets** pour les informations sensibles
2. **Mettez en cache les dépendances** pour accélérer les builds
3. **Parallélisez les jobs** quand c'est possible
4. **Utilisez des matrices** pour tester sur plusieurs environnements

## Conclusion

GitHub Actions simplifie considérablement la mise en place de pipelines CI/CD robustes. Avec une configuration appropriée, vous pouvez automatiser vos tests, builds et déploiements de manière efficace.
      ` : `
# Modern DevOps Introduction

Modern DevOps requires a structured approach to continuous integration and deployment. GitHub Actions provides a powerful and flexible solution to automate your workflows.

## What is GitHub Actions?

GitHub Actions is a continuous integration and continuous deployment (CI/CD) platform that allows you to automate, customize, and execute your software development workflows directly in your GitHub repository.

## Basic Configuration

To get started, create a \`.github/workflows/ci.yml\` file in your project:

\`\`\`yaml
name: CI/CD Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test
\`\`\`

## Best Practices

1. **Use secrets** for sensitive information
2. **Cache dependencies** to speed up builds
3. **Parallelize jobs** when possible
4. **Use matrices** to test across multiple environments

## Conclusion

GitHub Actions significantly simplifies setting up robust CI/CD pipelines. With proper configuration, you can efficiently automate your tests, builds, and deployments.
      `,
      date: "2024-01-15",
      readTime: language === 'fr' ? "8 min de lecture" : "8 min read",
      tags: ["DevOps", "CI/CD", "GitHub Actions"],
      author: "Brandon Kamga"
    },
    "ml-fastapi-api-robuste": {
      id: "2",
      title: language === 'fr'
        ? "Machine Learning avec FastAPI : Créer une API robuste"
        : "Machine Learning with FastAPI: Building a Robust API",
      content: language === 'fr' ? `
# Machine Learning avec FastAPI

FastAPI est devenu l'un des frameworks les plus populaires pour créer des APIs de machine learning performantes et robustes.

## Pourquoi FastAPI pour le ML ?

- **Performance** : Basé sur Starlette et Pydantic
- **Documentation automatique** : Swagger UI intégré
- **Validation des données** : Type hints Python
- **Asynchrone** : Support natif de l'async/await

## Structure du projet

\`\`\`
ml-api/
├── app/
│   ├── main.py
│   ├── models/
│   ├── routers/
│   └── services/
├── requirements.txt
└── Dockerfile
\`\`\`

## Exemple d'implémentation

\`\`\`python
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
\`\`\`

## Déploiement avec Docker

\`\`\`dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

## Conclusion

FastAPI offre une excellente base pour créer des APIs de machine learning robustes et performantes, avec une documentation automatique et une validation des données intégrée.
      ` : `
# Machine Learning with FastAPI

FastAPI has become one of the most popular frameworks for creating performant and robust machine learning APIs.

## Why FastAPI for ML?

- **Performance**: Based on Starlette and Pydantic
- **Automatic documentation**: Integrated Swagger UI
- **Data validation**: Python type hints
- **Asynchronous**: Native async/await support

## Project Structure

\`\`\`
ml-api/
├── app/
│   ├── main.py
│   ├── models/
│   ├── routers/
│   └── services/
├── requirements.txt
└── Dockerfile
\`\`\`

## Implementation Example

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="ML API", version="1.0.0")

# Load the model
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
\`\`\`

## Deployment with Docker

\`\`\`dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

## Conclusion

FastAPI provides an excellent foundation for creating robust and performant machine learning APIs, with automatic documentation and integrated data validation.
      `,
      date: "2024-01-10",
      readTime: language === 'fr' ? "12 min de lecture" : "12 min read",
      tags: ["Machine Learning", "FastAPI", "Python"],
      author: "Brandon Kamga"
    },
    "react-typescript-bonnes-pratiques-2024": {
      id: "3",
      title: language === 'fr'
        ? "React et TypeScript : Bonnes pratiques pour 2024"
        : "React and TypeScript: Best Practices for 2024",
      content: language === 'fr' ? `
# React et TypeScript : Bonnes pratiques pour 2024

L'écosystème React évolue constamment. Voici les bonnes pratiques à adopter en 2024 pour développer des applications robustes avec TypeScript.

## 1. Hooks personnalisés typés

\`\`\`typescript
interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## 2. Composants avec forwardRef

\`\`\`typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
\`\`\`

## 3. Gestion d'état avec Zustand

\`\`\`typescript
interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
\`\`\`

## 4. Validation avec Zod

\`\`\`typescript
const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18),
});

type User = z.infer<typeof userSchema>;

function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Champs du formulaire */}
    </form>
  );
}
\`\`\`

## 5. Tests avec Testing Library

\`\`\`typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
\`\`\`

## Conclusion

Ces pratiques vous aideront à créer des applications React plus maintenables et robustes. L'important est de rester cohérent dans votre équipe et de toujours privilégier la lisibilité du code.
      ` : `
# React and TypeScript: Best Practices for 2024

The React ecosystem is constantly evolving. Here are the best practices to adopt in 2024 for developing robust applications with TypeScript.

## 1. Typed Custom Hooks

\`\`\`typescript
interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## 2. Components with forwardRef

\`\`\`typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
\`\`\`

## 3. State Management with Zustand

\`\`\`typescript
interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
\`\`\`

## 4. Validation with Zod

\`\`\`typescript
const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18),
});

type User = z.infer<typeof userSchema>;

function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
\`\`\`

## 5. Testing with Testing Library

\`\`\`typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
\`\`\`

## Conclusion

These practices will help you create more maintainable and robust React applications. The important thing is to stay consistent within your team and always prioritize code readability.
      `,
      date: "2024-01-05",
      readTime: language === 'fr' ? "10 min de lecture" : "10 min read",
      tags: ["React", "TypeScript", "Frontend"],
      author: "Brandon Kamga"
    }
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'fr' ? 'Article non trouvé' : 'Post not found'}
          </h1>
          <Link 
            to="/blog" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'fr' 
      ? date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Header de l'article */}
      <article className="pt-20 sm:pt-24">
        <header className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
              >
                <ArrowLeft size={16} />
                {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
              </Link>

              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-gray-600 dark:text-gray-400">
                  {language === 'fr' ? 'Par' : 'By'} <span className="font-medium">{post.author}</span>
                </div>
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Share2 size={16} />
                  {language === 'fr' ? 'Partager' : 'Share'}
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Contenu de l'article */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br>').replace(/```(\w+)?\n([\s\S]*?)\n```/g, '<pre><code class="language-$1">$2</code></pre>')
              }}
            />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
