/**
 * Returns Hex color to RGBA color
 * @module @sbom-harbor-ui/dashboard/utils/hex-to-rgba
 * @param {string} hexCode - The hex color
 * @param {number} opacity - The alpha value
 * @returns {string} The RGBA color string
 */
export const hexToRGBA = (hexCode: string, opacity: number) => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
