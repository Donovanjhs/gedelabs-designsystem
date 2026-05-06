/**
 * Gedê Design System — Badge Tokens
 * Versão: 1.0.0
 *
 * PRÉ-REQUISITO — Importar cores e tipografia:
 *   import { colors } from '@/tokens/colors';
 *   import { typography } from '@/tokens/typography';
 *
 * Como usar:
 *   import { badge } from '@/tokens/badge';
 *
 *   // Badge de status
 *   <View style={badge.status.confirmed.container}>
 *     <Text style={badge.status.confirmed.label}>CONFIRMADO</Text>
 *   </View>
 *
 *   // Indicador de notificação
 *   <View style={badge.indicator.success.ring}>
 *     <View style={badge.indicator.success.dot} />
 *   </View>
 */

import { colors } from '@/tokens/colors'
import { typography } from '@/tokens/typography'

// ─── Base compartilhada ───────────────────────────────────────────────────────

const badgeBase = {
  height:          24,
  borderRadius:    100,
  paddingHorizontal: 10,
  borderWidth:     1,
  alignSelf:       'flex-start' as const,
  alignItems:      'center' as const,
  justifyContent:  'center' as const,
  flexDirection:   'row' as const,
}

const labelBase = {
  ...typography.badge,
  textTransform: 'uppercase' as const,
}

// ─── Tokens ───────────────────────────────────────────────────────────────────

export const badge = {

  // ─── Status de agendamento ──────────────────────────────────────────────────

  status: {

    /**
     * neutral
     * Badge padrão sem carga semântica
     * Ex: categorias, labels genéricos
     */
    neutral: {
      container: {
        ...badgeBase,
        backgroundColor: 'transparent',
        borderColor:     colors.border.default,   // #E9E9E9
      },
      label: {
        ...labelBase,
        color: colors.text.secondary,             // #757575
      },
    },

    /**
     * confirmed
     * Agendamento confirmado
     */
    confirmed: {
      container: {
        ...badgeBase,
        backgroundColor: 'transparent',
        borderColor:     colors.success.default,  // #34A740
      },
      label: {
        ...labelBase,
        color: colors.success.default,            // #34A740
      },
    },

    /**
     * pending
     * Agendamento pendente — aguardando confirmação
     */
    pending: {
      container: {
        ...badgeBase,
        backgroundColor: 'transparent',
        borderColor:     colors.warning.default,  // #BF6A02
      },
      label: {
        ...labelBase,
        color: colors.warning.default,            // #BF6A02
      },
    },

    /**
     * cancelled
     * Agendamento cancelado
     */
    cancelled: {
      container: {
        ...badgeBase,
        backgroundColor: 'transparent',
        borderColor:     colors.error.default,    // #EC221F
      },
      label: {
        ...labelBase,
        color: colors.error.default,              // #EC221F
      },
    },

    /**
     * active
     * Serviço ou profissional ativo
     */
    active: {
      container: {
        ...badgeBase,
        backgroundColor: 'transparent',
        borderColor:     colors.success.default,  // #34A740
      },
      label: {
        ...labelBase,
        color: colors.success.default,            // #34A740
      },
    },

    /**
     * inactive
     * Serviço ou profissional inativo
     */
    inactive: {
      container: {
        ...badgeBase,
        backgroundColor: 'transparent',
        borderColor:     colors.border.strong,    // #CECECE
      },
      label: {
        ...labelBase,
        color: colors.text.secondary,             // #757575
      },
    },

  },

  // ─── Indicadores de notificação ─────────────────────────────────────────────
  // Estrutura: <View style={ring}><View style={dot} /></View>

  indicator: {

    /**
     * success
     * Anel externo (superfície) + ponto interno (ênfase)
     */
    success: {
      ring: {
        width:           18,
        height:          18,
        borderRadius:    9,
        borderWidth:     2,
        borderColor:     colors.success.default,  // #34A740
        alignItems:      'center' as const,
        justifyContent:  'center' as const,
      },
      dot: {
        width:           8,
        height:          8,
        borderRadius:    4,
        backgroundColor: colors.success.default,  // #34A740
      },
    },

    /**
     * pending
     * Indicador de estado pendente
     */
    pending: {
      ring: {
        width:           18,
        height:          18,
        borderRadius:    9,
        borderWidth:     2,
        borderColor:     colors.warning.default,  // #BF6A02
        alignItems:      'center' as const,
        justifyContent:  'center' as const,
      },
      dot: {
        width:           8,
        height:          8,
        borderRadius:    4,
        backgroundColor: colors.warning.default,  // #BF6A02
      },
    },

    /**
     * error
     * Indicador de erro ou cancelamento
     */
    error: {
      ring: {
        width:           18,
        height:          18,
        borderRadius:    9,
        borderWidth:     2,
        borderColor:     colors.error.default,    // #EC221F
        alignItems:      'center' as const,
        justifyContent:  'center' as const,
      },
      dot: {
        width:           8,
        height:          8,
        borderRadius:    4,
        backgroundColor: colors.error.default,    // #EC221F
      },
    },

    /**
     * neutral
     * Indicador sem estado semântico
     */
    neutral: {
      ring: {
        width:           18,
        height:          18,
        borderRadius:    9,
        borderWidth:     2,
        borderColor:     colors.border.strong,    // #CECECE
        alignItems:      'center' as const,
        justifyContent:  'center' as const,
      },
      dot: {
        width:           8,
        height:          8,
        borderRadius:    4,
        backgroundColor: colors.border.strong,    // #CECECE
      },
    },

  },

} as const

export type BadgeStatus    = keyof typeof badge.status
export type BadgeIndicator = keyof typeof badge.indicator
