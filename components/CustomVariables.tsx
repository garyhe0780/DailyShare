/** @jsx h */
import { h } from 'preact'
import { AppInfo } from "../types/index.ts";
import { generateCSSVariables, colors } from '../utils/color.ts'

export default function CustomVariables(props: { appInfo: AppInfo }) {
  const index = colors.findIndex(e => e[500] == props.appInfo.theme) || 0

  return <style>{generateCSSVariables(index)}</style>
}
