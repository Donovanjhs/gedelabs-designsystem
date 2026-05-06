/**
 * Gedê Design System — Card Tokens
 * Versão: 1.0.0
 *
 * Como usar:
 *   import { cards } from '@/tokens/cards'
 *
 *   // card/stat confirmado
 *   <View style={cards.stat.confirmed}>
 *
 *   // card/ticket
 *   <View style={cards.ticket.container}>
 *
 *   // card/service selecionado
 *   <View style={cards.service.selected}>
 */

import { colors } from '@/tokens/colors'
import { typography } from '@/tokens/typography'

const cardBase = {
  backgroundColor: '#FFFFFF',
  borderRadius:    12,
  padding:         14,
  borderWidth:     1,
  borderColor:     '#E9E9E9',
}

export const cards = {

  // ─── card/stat ──────────────────────────────────────────────────────────────

  stat: {

    /**
     * confirmed
     * Borda verde — agendamentos confirmados
     */
    confirmed: {
      ...cardBase,
      borderColor: colors.success.default,       // #34A740
    },

    /**
     * pending
     * Borda âmbar — agendamentos pendentes
     */
    pending: {
      ...cardBase,
      borderColor: colors.warning.default,       // #BF6A02
    },

    /**
     * highlight
     * Sem borda semântica — métricas de destaque (ex: faturamento)
     */
    highlight: {
      ...cardBase,
      borderColor: '#E9E9E9',
    },

    // Textos internos do card/stat
    title: {
      ...typography.body,
      color: colors.text.primary,                // #1E1E1E
    },

    value: {
      ...typography.display,
      color: colors.text.primary,               // #1E1E1E
    },

    valueAccent: {
      ...typography.display,
      color: colors.brand.accent,               // #14AE5C
    },

    valuePending: {
      ...typography.display,
      color: colors.warning.default,            // #BF6A02
    },

    label: {
      ...typography.label,
      color: colors.text.subtle,                // #979797
    },

    labelConfirmed: {
      ...typography.label,
      color: colors.success.default,            // #34A740
    },

    labelPending: {
      ...typography.label,
      color: colors.warning.default,            // #BF6A02
    },

  },

  // ─── card/ticket ────────────────────────────────────────────────────────────

  ticket: {

    container: {
      ...cardBase,
      gap: 12,
    },

    date: {
      ...typography.label,
      color: colors.text.subtle,                // #979797
    },

    time: {
      fontFamily:  'Inter, sans-serif',
      fontSize:    28,
      fontWeight:  '700' as const,
      color:       colors.text.primary,         // #1E1E1E
      lineHeight:  34,
    },

    clientName: {
      ...typography.body,
      fontWeight: '600' as const,
      color:      colors.text.primary,          // #1E1E1E
    },

    clientPhone: {
      ...typography.label,
      color: colors.text.subtle,                // #979797
    },

    service: {
      ...typography.body,
      fontWeight: '600' as const,
      color:      colors.text.primary,          // #1E1E1E
      textAlign:  'right' as const,
    },

    price: {
      fontFamily:  'Inter, sans-serif',
      fontSize:    16,
      fontWeight:  '600' as const,
      color:       colors.warning.default,      // #BF6A02
      textAlign:   'right' as const,
    },

    actions: {
      flexDirection: 'row' as const,
      gap:           10,
    },

  },

  // ─── card/service ───────────────────────────────────────────────────────────

  service: {

    /**
     * default
     * Serviço não selecionado — fundo branco, borda sutil
     */
    default: {
      ...cardBase,
      flexDirection:  'row' as const,
      alignItems:     'center' as const,
      justifyContent: 'space-between' as const,
    },

    /**
     * selected
     * Serviço selecionado — fundo verde primário
     */
    selected: {
      ...cardBase,
      backgroundColor: colors.brand.accent,     // #14AE5C
      borderColor:     colors.brand.accent,
      flexDirection:   'row' as const,
      alignItems:      'center' as const,
      justifyContent:  'space-between' as const,
    },

    serviceName: {
      ...typography.body,
      color: colors.text.primary,               // #1E1E1E
    },

    serviceNameSelected: {
      ...typography.body,
      color: colors.text.inverted,              // #FFFFFF
    },

    servicePrice: {
      ...typography.body,
      fontWeight: '600' as const,
      color:      colors.success.default,       // #34A740
    },

    servicePriceSelected: {
      ...typography.body,
      fontWeight: '600' as const,
      color:      colors.text.inverted,         // #FFFFFF
    },

  },

} as const

export type StatVariant    = keyof typeof cards.stat
export type ServiceVariant = 'default' | 'selected'
