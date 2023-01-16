import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { SetHelloCalled } from "../generated/HelloWorld/HelloWorld"

export function createSetHelloCalledEvent(
  message: string,
  sender: Address
): SetHelloCalled {
  let setHelloCalledEvent = changetype<SetHelloCalled>(newMockEvent())

  setHelloCalledEvent.parameters = new Array()

  setHelloCalledEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  setHelloCalledEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return setHelloCalledEvent
}
