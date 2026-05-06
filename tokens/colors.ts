/**
 * Gedê Design System — Color Tokens
 * Versão: 1.0.0
 *
 * Como usar:
 *   import { colors } from '@/tokens/colors';
 *   style={{ color: colors.text.primary }}
 *   style={{ backgroundColor: colors.brand.primary }}
 */

// ─── Primitivos ───────────────────────────────────────────────────────────────
// Valores brutos da paleta. Use os semânticos abaixo sempre que possível.

export const palette = {
  green: {
    300: '#93D49A',
    400: '#34A740',
    410: '#14AE5C',
    500: '#17381A',
  },
  red: {
    100: '#FDD3D0',
    200: '#E24B4A',
    300: '#EC221F',
    400: '#900B09',
  },
  amber: {
    100: '#F0E6DA',
    200: '#BF6A02',
  },
  neutral: {
    100: '#FFFFFF',
    300: '#E9E9E9',
    400: '#CECECE',
    500: '#A8A8A8',
    600: '#979797',
    700: '#757575',
    800: '#5A5A5A',
    900: '#1E1E1E',
  },
} as const;

// ─── Semânticos ───────────────────────────────────────────────────────────────
// Use esses no código. Cada nome descreve o papel da cor, não o valor.

export const colors = {

  brand: {
    /** Verde principal da Gedê — botões primários, ícones ativos, badges de sucesso */
    primary:  palette.green[400],
    /** Verde vibrante — destaques, CTAs, links */
    accent:   palette.green[410],
    /** Verde escuro — fundos de header, superfícies invertidas */
    dark:     palette.green[500],
  },

  success: {
    /** Cor padrão de sucesso — confirmações, estado CONFIRMADO */
    default:  palette.green[400],
  },

  error: {
    /** Texto de erro — mensagens críticas */
    text:     palette.red[400],
    /** Cor padrão de erro — botão recusar, estado CANCELADO */
    default:  palette.red[300],
    /** Erro médio — ícones de alerta, bordas de campo inválido */
    medium:   palette.red[200],
    /** Superfície de erro — fundo de toast, banner de alerta */
    surface:  palette.red[100],
  },

  warning: {
    /** Cor padrão de aviso — estado PENDENTE, alertas de prazo */
    default:  palette.amber[200],
    /** Superfície de aviso — fundo de banner de atenção */
    surface:  palette.amber[100],
  },

  text: {
    /** Texto principal — títulos, nomes, valores */
    primary:      palette.neutral[900],
    /** Texto de label — rótulos de campo, itens de menu */
    label:        palette.neutral[800],
    /** Texto secundário — descrições, subtítulos */
    secondary:    palette.neutral[700],
    /** Texto sutil — metadados, timestamps discretos */
    subtle:       palette.neutral[600],
    /** Placeholder — campos vazios de input */
    placeholder:  palette.neutral[500],
    /** Texto invertido — sobre fundos escuros ou coloridos */
    inverted:     palette.neutral[100],
  },

  border: {
    /** Borda padrão — cards, inputs, divisores */
    default:  palette.neutral[300],
    /** Borda forte — inputs focados, separadores de seção */
    strong:   palette.neutral[400],
    /** Borda de sucesso — input válido, card confirmado */
    success:  palette.green[300],
    /** Borda de erro — input inválido, card recusado */
    error:    palette.red[300],
  },

} as const;

export type BrandColor   = keyof typeof colors.brand;
export type TextColor    = keyof typeof colors.text;
export type BorderColor  = keyof typeof colors.border;
export type ErrorColor   = keyof typeof colors.error;
export type WarningColor = keyof typeof colors.warning;
