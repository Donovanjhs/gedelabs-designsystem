/**
 * Gedê Design System — Typography Tokens
 * Versão: 1.1.0
 *
 * PRÉ-REQUISITO — Carregar a fonte Inter antes de usar:
 *
 *   import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
 *
 *   const [fontsLoaded] = useFonts({
 *     Inter: Inter_400Regular,
 *     'Inter-Medium':   Inter_500Medium,
 *     'Inter-SemiBold': Inter_600SemiBold,
 *   });
 *
 *   if (!fontsLoaded) return null; // aguarda carregamento antes de renderizar
 *
 * Como usar:
 *   import { typography } from '@/tokens/typography';
 *   style={typography.body}
 */

export const fontFamily = {
  base: 'Inter',
} as const;

export const fontWeight = {
  regular:  '400',
  medium:   '500',
  semibold: '600',
} as const;

export const fontSize = {
  12: 12,
  14: 14,
  16: 16,
  32: 32,
} as const;

export const lineHeight = {
  tight:  22, // display — números grandes e KPIs
  snug:   22, // section — cabeçalhos intermediários
  normal: 20, // body e label — texto corrido
} as const;

export const letterSpacing = {
  normal: 0,
  wide:   0.8, // badges em caixa alta (ex: CONFIRMADO, ATIVO)
} as const;

// ─── Estilos compostos ────────────────────────────────────────────────────────
// Prontos para usar diretamente em StyleSheet.create() ou inline style

export const typography = {

  /**
   * display
   * Números de destaque e KPIs
   * Ex: total de agendamentos, faturamento do mês
   */
  display: {
    fontFamily:    fontFamily.base,
    fontSize:      fontSize[32],
    fontWeight:    fontWeight.semibold,
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.normal,
  },

  /**
   * section
   * Cabeçalhos de seção
   * Ex: "Pedidos pendentes", "Minha Agenda"
   */
  section: {
    fontFamily:    fontFamily.base,
    fontSize:      fontSize[16],
    fontWeight:    fontWeight.medium,
    lineHeight:    lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },

  /**
   * body
   * Texto principal e botões
   * Uso geral na interface
   */
  body: {
    fontFamily:    fontFamily.base,
    fontSize:      fontSize[14],
    fontWeight:    fontWeight.medium,
    lineHeight:    lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  /**
   * label
   * Datas, labels e chips
   * Menor nível de hierarquia visual
   */
  label: {
    fontFamily:    fontFamily.base,
    fontSize:      fontSize[12],
    fontWeight:    fontWeight.medium,
    lineHeight:    lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  /**
   * badge
   * Status em caixa alta
   * Ex: CONFIRMADO · ATIVO · FECHADO
   */
  badge: {
    fontFamily:    fontFamily.base,
    fontSize:      fontSize[12],
    fontWeight:    fontWeight.semibold,
    lineHeight:    lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },

} as const;

export type TypographyVariant = keyof typeof typography;
