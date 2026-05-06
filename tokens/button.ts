/**
 * Gedê Design System — Button Tokens
 * Versão: 1.0.0
 *
 * PRÉ-REQUISITO — Importar cores e tipografia antes de usar:
 *   import { colors } from '@/tokens/colors';
 *   import { typography } from '@/tokens/typography';
 *
 * Como usar:
 *   import { button } from '@/tokens/button';
 *   style={button.base}
 *   style={[button.base, button.variant.success]}
 *   textStyle={[button.label, button.labelVariant.success]}
 */

import { colors } from '@/tokens/colors';
import { typography } from '@/tokens/typography';

// ─── Base ─────────────────────────────────────────────────────────────────────
// Propriedades compartilhadas por todas as variações

export const button = {

  base: {
    height:         44,
    borderRadius:   10,
    paddingHorizontal: 20,
    alignItems:     'center' as const,
    justifyContent: 'center' as const,
    borderWidth:    1,
  },

  // Texto padrão do botão — herda de typography.body
  label: {
    ...typography.body,
  },

  // ─── Variantes de container ────────────────────────────────────────────────

  variant: {

    /**
     * success
     * Ação primária positiva — confirmar, agendar, salvar
     * Fundo sólido verde
     */
    success: {
      backgroundColor: colors.success.default,
      borderColor:     colors.success.default,
    },

    /**
     * success.subtle
     * Ação secundária positiva — ver detalhes, aceitar sugestão
     * Fundo suave verde claro
     */
    successSubtle: {
      backgroundColor: colors.border.success,  // green/300 · #93D49A
      borderColor:     colors.border.success,
    },

    /**
     * error
     * Ação destrutiva — recusar, cancelar, excluir
     * Fundo sólido vermelho
     */
    error: {
      backgroundColor: colors.error.text,      // red/400 · #900B09
      borderColor:     colors.error.text,
    },

    /**
     * error.subtle
     * Ação destrutiva secundária — alerta, confirmação de exclusão
     * Fundo suave rosa claro
     */
    errorSubtle: {
      backgroundColor: colors.error.surface,   // red/100 · #FDD3D0
      borderColor:     colors.error.surface,
    },

    /**
     * warning.subtle
     * Ação de atenção — pendente, aguardando confirmação
     * Fundo suave âmbar claro
     */
    warningSubtle: {
      backgroundColor: colors.warning.surface, // amber/100 · #F0E6DA
      borderColor:     colors.warning.surface,
    },

  },

  // ─── Variantes de texto ────────────────────────────────────────────────────

  labelVariant: {

    success: {
      color: colors.text.inverted,             // #FFFFFF
    },

    successSubtle: {
      color: colors.brand.dark,                // #17381A
    },

    error: {
      color: colors.text.inverted,             // #FFFFFF
    },

    errorSubtle: {
      color: colors.error.text,               // #900B09
    },

    warningSubtle: {
      color: colors.warning.default,           // #BF6A02
    },

  },

} as const;

export type ButtonVariant = keyof typeof button.variant;
