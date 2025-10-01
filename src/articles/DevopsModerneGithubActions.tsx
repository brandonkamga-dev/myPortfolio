import ArticleLayout from './ArticleLayout';
import CodeBlock from '../components/CodeBlock';
import { 
  ArticleSection, 
  ArticleNote, 
  ArticleInlineCode,
  ArticleDivider,
  ArticleLead
} from '../components/ArticleComponents';

const ciYaml = `name: CI/CD Pipeline
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
      run: npm test`;

const advancedYaml = `name: Advanced CI/CD Pipeline
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '18'
  CACHE_VERSION: v1

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 18
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Upload coverage
      uses: codecov/codecov-action@v3
      if: matrix.node-version == 18

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to production
      run: echo "Deploying to production..."
      env:
        DEPLOY_KEY: "secret-key-here"`;

const DevopsModerneGithubActions = () => (
  <ArticleLayout>
    <h1>Introduction au DevOps moderne</h1>
    
    <ArticleLead>
      Le DevOps moderne nécessite une approche structurée pour l'intégration et le déploiement continus. 
      GitHub Actions offre une solution puissante et flexible pour automatiser vos workflows de développement.
    </ArticleLead>

    <ArticleNote type="info">
      <strong>Prérequis :</strong> Ce guide suppose que vous avez des connaissances de base en Git et GitHub. 
      Une familiarité avec les concepts CI/CD est également recommandée.
    </ArticleNote>

    <ArticleDivider />

    <ArticleSection>
      <h2>Qu'est-ce que GitHub Actions ?</h2>
      
      <p>
        GitHub Actions est une plateforme d'intégration et de déploiement continus (CI/CD) qui vous permet 
        d'automatiser, de personnaliser et d'exécuter vos workflows de développement logiciel directement 
        dans votre dépôt GitHub.
      </p>

      <p>
        Les principaux avantages incluent :
      </p>

      <ul>
        <li><strong>Intégration native</strong> : Directement intégré à GitHub</li>
        <li><strong>Flexibilité</strong> : Support de multiples langages et plateformes</li>
        <li><strong>Marketplace</strong> : Écosystème riche d'actions prêtes à l'emploi</li>
        <li><strong>Gratuit</strong> : 2000 minutes gratuites par mois pour les dépôts publics</li>
      </ul>
    </ArticleSection>

    <ArticleSection background>
      <h2>Configuration de base</h2>
      
      <p>
        Pour commencer, créez un fichier <ArticleInlineCode>.github/workflows/ci.yml</ArticleInlineCode> dans votre projet :
      </p>
      
      <CodeBlock language="yaml">{ciYaml}</CodeBlock>

      <ArticleNote type="success">
        <strong>Astuce :</strong> Ce workflow se déclenche automatiquement à chaque push sur la branche main 
        et à chaque pull request.
      </ArticleNote>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection>
      <h2>Configuration avancée</h2>
      
      <p>
        Voici un exemple plus avancé avec des matrices de test, la mise en cache et le déploiement conditionnel :
      </p>
      
      <CodeBlock language="yaml">{advancedYaml}</CodeBlock>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection background>
      <h2>Bonnes pratiques</h2>
      
      <ul>
        <li>
          <strong>Utilisez des secrets</strong> pour les informations sensibles comme les clés API 
          et les tokens d'authentification
        </li>
        <li>
          <strong>Mettez en cache les dépendances</strong> pour accélérer les builds et réduire 
          la bande passante
        </li>
        <li>
          <strong>Parallélisez les jobs</strong> quand c'est possible pour réduire le temps total 
          d'exécution
        </li>
        <li>
          <strong>Utilisez des matrices</strong> pour tester sur plusieurs environnements 
          (versions Node.js, OS, etc.)
        </li>
        <li>
          <strong>Conditionnez les déploiements</strong> pour éviter les déploiements accidentels
        </li>
      </ul>

      <ArticleNote type="warning">
        <strong>Attention :</strong> Ne jamais committer de secrets directement dans le code. 
        Utilisez toujours les GitHub Secrets pour les informations sensibles.
      </ArticleNote>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection>
      <h2>Conclusion</h2>
      
      <p>
        GitHub Actions simplifie considérablement la mise en place de pipelines CI/CD robustes. 
        Avec une configuration appropriée, vous pouvez automatiser vos tests, builds et déploiements 
        de manière efficace tout en maintenant la qualité de votre code.
      </p>

      <p>
        L'écosystème GitHub Actions continue de croître avec de nouvelles actions disponibles 
        quotidiennement sur le marketplace, rendant l'automatisation encore plus accessible.
      </p>

      <ArticleNote type="success">
        <strong>Prochaines étapes :</strong> Explorez le GitHub Actions Marketplace pour découvrir 
        des actions prêtes à l'emploi qui peuvent accélérer votre workflow de développement.
      </ArticleNote>
    </ArticleSection>
  </ArticleLayout>
);

export default DevopsModerneGithubActions;

