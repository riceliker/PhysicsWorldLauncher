import { ref } from 'vue'


const HOUR_LIGHT = 6
const HOUR_DARK = 18

type ThemeMode = 'time' | 'system' | 'manual'
type ThemeValue = 'light' | 'dark'

const theme = ref<ThemeValue>('light')

const themeMode = ref<ThemeMode>('time')
const manualTheme = ref<ThemeValue>('light')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

export function useTheme() {

  const applyHtmlClass = (val: ThemeValue) => {
    const html = document.documentElement
    if (val === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  const setCurrentTheme = (val: ThemeValue) => {
    theme.value = val
    applyHtmlClass(val)
  }

  const getThemeByTime = (): ThemeValue => {
    const hour = new Date().getHours()
    return hour >= HOUR_LIGHT && hour < HOUR_DARK ? 'light' : 'dark'
  }

  const getThemeBySystem = (): ThemeValue => {
    return prefersDark.matches ? 'dark' : 'light'
  }

  const refreshTheme = () => {
    switch (themeMode.value) {
      case 'time':
        setCurrentTheme(getThemeByTime())
        break
      case 'system':
        setCurrentTheme(getThemeBySystem())
        break
      case 'manual':
        setCurrentTheme(manualTheme.value)
        break
    }
  }

  const setThemeMode = (mode: ThemeMode) => {
    themeMode.value = mode
    refreshTheme()
  }

  const setManualTheme = (val: ThemeValue) => {
    manualTheme.value = val
    if (themeMode.value === 'manual') {
      setCurrentTheme(val)
    }
  }

  refreshTheme()

  setInterval(() => {
    if (themeMode.value === 'time') {
      refreshTheme()
    }
  }, 60 * 1000)
  
  prefersDark.addEventListener('change', () => {
    if (themeMode.value === 'system') {
      refreshTheme()
    }
  })

  return {
    theme,
    themeMode,
    manualTheme,
    setThemeMode,
    setManualTheme
  }
}
