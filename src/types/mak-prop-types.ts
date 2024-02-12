import { TypeProps } from "./component-types"
import { MotionProps } from "framer-motion"

export type MakUiElementProps = TypeProps & {
  motion?: MotionProps
}
