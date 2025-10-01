import ArticleLayout from './ArticleLayout';
import CodeBlock from '../components/CodeBlock';
import { 
  ArticleSection, 
  ArticleNote, 
  ArticleInlineCode,
  ArticleDivider,
  ArticleLead
} from '../components/ArticleComponents';

const useApiExample = `
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
`;

const forwardRefExample = `
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
`;

const zustandExample = `
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
`;

const zodExample = `
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
`;

const testingLibraryExample = `
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
`;

const ReactTypescriptBonnesPratiques2024 = () => (
  <ArticleLayout>
    <h1>React et TypeScript : Bonnes pratiques pour 2024</h1>
    
    <ArticleLead>
      L'écosystème React évolue constamment. Découvrez les bonnes pratiques essentielles 
      à adopter en 2024 pour développer des applications robustes, maintenables et performantes avec TypeScript.
    </ArticleLead>

    <ArticleNote type="info">
      <strong>Niveau :</strong> Intermédiaire à avancé. Ce guide suppose une bonne connaissance 
      de React et TypeScript de base.
    </ArticleNote>

    <ArticleDivider />

    <ArticleSection>
      <h2>1. Hooks personnalisés typés</h2>
      
      <p>
        Les hooks personnalisés sont l'un des patterns les plus puissants de React. 
        Avec TypeScript, nous pouvons créer des hooks réutilisables et type-safe :
      </p>
      
      <CodeBlock language="typescript">{useApiExample}</CodeBlock>

      <ArticleNote type="success">
        <strong>Avantage :</strong> Ce hook peut être réutilisé avec n'importe quel type de données, 
        tout en conservant la sécurité des types à la compilation.
      </ArticleNote>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection background>
      <h2>2. Composants avec forwardRef</h2>
      
      <p>
        Le pattern <ArticleInlineCode>forwardRef</ArticleInlineCode> permet de transmettre 
        des références à travers les composants, essentiel pour l'accessibilité et l'intégration 
        avec des bibliothèques tierces :
      </p>
      
      <CodeBlock language="typescript">{forwardRefExample}</CodeBlock>

      <p>
        Cette approche garantit que votre composant peut recevoir toutes les props HTML natives 
        tout en ajoutant ses propres propriétés personnalisées.
      </p>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection>
      <h2>3. Gestion d'état avec Zustand</h2>
      
      <p>
        Zustand offre une alternative légère à Redux avec une excellente intégration TypeScript. 
        Sa simplicité en fait un choix idéal pour la plupart des applications :
      </p>
      
      <CodeBlock language="typescript">{zustandExample}</CodeBlock>

      <ArticleNote type="info">
        <strong>Performance :</strong> Zustand ne provoque des re-renders que des composants 
        qui utilisent effectivement les données modifiées, optimisant naturellement les performances.
      </ArticleNote>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection background>
      <h2>4. Validation avec Zod</h2>
      
      <p>
        Zod révolutionne la validation en TypeScript en générant automatiquement les types 
        à partir des schémas de validation, éliminant la duplication de code :
      </p>
      
      <CodeBlock language="typescript">{zodExample}</CodeBlock>

      <p>
        Cette approche garantit que vos types TypeScript restent toujours synchronisés 
        avec vos règles de validation, réduisant les erreurs à l'exécution.
      </p>

      <ArticleNote type="warning">
        <strong>Attention :</strong> Validez toujours les données côté serveur également, 
        même si vous utilisez Zod côté client.
      </ArticleNote>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection>
      <h2>5. Tests avec Testing Library</h2>
      
      <p>
        React Testing Library encourage les bonnes pratiques de test en se concentrant 
        sur le comportement utilisateur plutôt que sur l'implémentation :
      </p>
      
      <CodeBlock language="typescript">{testingLibraryExample}</CodeBlock>

      <p>
        Cette approche rend vos tests plus robustes aux changements d'implémentation 
        tout en garantissant que votre application fonctionne comme attendu par l'utilisateur.
      </p>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection background>
      <h2>Bonnes pratiques supplémentaires</h2>
      
      <ul>
        <li><strong>Utilisez des types stricts</strong> : Activez <ArticleInlineCode>strict: true</ArticleInlineCode> dans votre tsconfig.json</li>
        <li><strong>Préférez les interfaces aux types</strong> : Pour une meilleure extensibilité</li>
        <li><strong>Utilisez des enums pour les constantes</strong> : Plus lisible et type-safe</li>
        <li><strong>Documentez vos types complexes</strong> : Avec des commentaires JSDoc</li>
        <li><strong>Évitez <ArticleInlineCode>any</ArticleInlineCode></strong> : Utilisez <ArticleInlineCode>unknown</ArticleInlineCode> quand nécessaire</li>
      </ul>

      <ArticleNote type="success">
        <strong>Outil recommandé :</strong> Utilisez ESLint avec les règles TypeScript 
        pour maintenir la qualité du code automatiquement.
      </ArticleNote>
    </ArticleSection>

    <ArticleDivider />

    <ArticleSection>
      <h2>Conclusion</h2>
      
      <p>
        Ces pratiques vous aideront à créer des applications React plus maintenables, robustes et performantes. 
        L'important est de rester cohérent dans votre équipe et de toujours privilégier la lisibilité 
        et la sécurité des types.
      </p>

      <p>
        L'écosystème React/TypeScript continue d'évoluer rapidement. Restez à jour avec les dernières 
        versions et n'hésitez pas à adopter progressivement ces patterns dans vos projets existants.
      </p>

      <ArticleNote type="info">
        <strong>Ressources :</strong> Consultez régulièrement la documentation officielle de React 
        et TypeScript pour découvrir les nouvelles fonctionnalités et bonnes pratiques.
      </ArticleNote>
    </ArticleSection>
  </ArticleLayout>
);

export default ReactTypescriptBonnesPratiques2024;

