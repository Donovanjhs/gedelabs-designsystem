/**
 * Gedê Design System — Input Tokens
 * Versão: 1.0.0
 *
 * PRÉ-REQUISITO — Importar cores e tipografia antes de usar:
 *   import { colors } from '@/tokens/colors';
 *   import { typography } from '@/tokens/typography';
 *
 * Como usar:
 *   import { input } from '@/tokens/input';
 *
 *   // Campo de texto
 *   <View style={input.container}>
 *     <Text style={input.label}>Nome</Text>
 *     <TextInput
 *       style={input.field.default}
 *       placeholderTextColor={input.placeholderColor}
 *       placeholder="Jane Smith"
 *     />
 *   </View>
 *
 *   // Com erro
 *   <View style={input.container}>
 *     <Text style={input.label}>E-mail</Text>
 *     <TextInput style={input.field.error} placeholderTextColor={input.placeholderColor} />
 *     <Text style={input.helperText.error}>E-mail inválido</Text>
 *   </View>
 *
 *   // Disabled
 *   <TextInput style={input.field.disabled} editable={false} />
 */

import { colors } from '@/tokens/colors';
import { typography } from '@/tokens/typography';

const fieldBase = {
  height:            48,
  borderRadius:      8,
  borderWidth:       1,
  paddingHorizontal: 14,
  backgroundColor:   '#FFFFFF',
  color:             colors.text.primary,
  ...typography.body,
};

export const input = {

  /** Wrapper externo — agrupa label + campo + helper text */
  container: {
    gap: 6,
  },

  /** Label acima do campo */
  label: {
    ...typography.label,
    color: colors.text.secondary,
  },

  /** Cor do placeholder — passar em placeholderTextColor={input.placeholderColor} */
  placeholderColor: colors.text.placeholder,

  field: {

    /**
     * default
     * Campo vazio, sem interação
     */
    default: {
      ...fieldBase,
      borderColor: colors.border.default,      // #E9E9E9
    },

    /**
     * focused
     * Campo ativo — usuário está digitando
     * Aplicar via onFocus / onBlur no componente
     */
    focused: {
      ...fieldBase,
      borderColor: colors.border.strong,       // #CECECE
    },

    /**
     * filled
     * Campo preenchido com valor válido
     */
    filled: {
      ...fieldBase,
      borderColor: colors.border.default,      // #E9E9E9
      color:       colors.text.primary,        // #1E1E1E
    },

    /**
     * error
     * Campo com valor inválido — exibir junto com helperText.error
     */
    error: {
      ...fieldBase,
      borderColor: colors.border.error,        // #EC221F
    },

    /**
     * disabled
     * Campo não editável
     */
    disabled: {
      ...fieldBase,
      borderColor:     colors.border.default,  // #E9E9E9
      backgroundColor: '#F5F5F5',
      color:           colors.text.placeholder,
      opacity:         0.6,
    },

  },

  /** Texto auxiliar abaixo do campo */
  helperText: {

    error: {
      ...typography.label,
      color: colors.error.default,             // #EC221F
    },

    hint: {
      ...typography.label,
      color: colors.text.subtle,               // #979797
    },

  },

  /** Select — campo com chevron à direita */
  select: {

    container: {
      ...fieldBase,
      borderColor:    colors.border.default,
      flexDirection:  'row' as const,
      alignItems:     'center' as const,
      justifyContent: 'space-between' as const,
    },

    text: {
      ...typography.body,
      color: colors.text.placeholder,
    },

    textFilled: {
      ...typography.body,
      color: colors.text.primary,
    },

  },

} as const;
