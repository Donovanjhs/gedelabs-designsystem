# Gedê Design System

Tokens de design e ícones do sistema Gedê para React Native.

## Estrutura

```
tokens/
├── typography.ts   — Escala tipográfica (Inter)
├── colors.ts       — Paleta semântica de cores
├── button.ts       — Variantes de botão
├── input.ts        — Estados de input e select
├── badge.ts        — Status e indicadores
├── cards.ts        — card/stat · card/ticket · card/service
└── icons.ts        — SVG strings dos ícones (active/inactive)

icons/
├── neutro/         — Estado inativo (#A8A8A8)
├── verde/          — Estado ativo (#34A740)
└── vermelho/       — Estado de erro (#EC221F)
```

## Como usar

### Instalação

Copie a pasta `tokens/` para `src/tokens/` no seu projeto React Native.

### Tipografia

```tsx
import { typography } from '@/tokens/typography'

<Text style={typography.section}>Minha Agenda</Text>
<Text style={typography.body}>Corte de Cabelo</Text>
<Text style={typography.label}>26/03/2026</Text>
<Text style={typography.display}>12</Text>
```

### Cores

```tsx
import { colors } from '@/tokens/colors'

<Text style={{ color: colors.text.primary }}>Donovan</Text>
<View style={{ backgroundColor: colors.success.default }} />
<View style={{ borderColor: colors.border.error }} />
```

### Botões

```tsx
import { button } from '@/tokens/button'

<TouchableOpacity style={[button.base, button.variant.success]}>
  <Text style={[button.label, button.labelVariant.success]}>Confirmar</Text>
</TouchableOpacity>

<TouchableOpacity style={[button.base, button.variant.error]}>
  <Text style={[button.label, button.labelVariant.error]}>Recusar</Text>
</TouchableOpacity>
```

### Inputs

```tsx
import { input } from '@/tokens/input'

<View style={input.container}>
  <Text style={input.label}>Nome</Text>
  <TextInput
    style={input.field.default}
    placeholderTextColor={input.placeholderColor}
    placeholder="Jane Smith"
  />
</View>
```

### Badges

```tsx
import { badge } from '@/tokens/badge'

<View style={badge.status.confirmed.container}>
  <Text style={badge.status.confirmed.label}>CONFIRMADO</Text>
</View>

// Indicador circle-notify
<View style={badge.indicator.success.ring}>
  <View style={badge.indicator.success.dot} />
</View>
```

### Ícones

> Requer `react-native-svg`

```tsx
import { SvgXml } from 'react-native-svg'
import { icons } from '@/tokens/icons'

// Navbar — alterna pelo estado da aba
<SvgXml
  xml={icons.navbar.home[isActive ? 'active' : 'inactive']}
  width={34}
  height={34}
/>

// Ícones de ação
<SvgXml xml={icons.add.active} width={36} height={36} />
<SvgXml xml={icons.error.active} width={36} height={36} />
<SvgXml xml={icons.chevronDown.inactive} width={36} height={36} />
```

## Dependências

```bash
npm install react-native-svg
npm install @expo-google-fonts/inter expo-font
```

## Versão

`1.0.0` — Maio 2026
