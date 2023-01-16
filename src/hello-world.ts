import { SetHelloCalled as SetHelloCalledEvent } from "../generated/HelloWorld/HelloWorld"
import { SetHelloCalled } from "../generated/schema"

export function handleSetHelloCalled(event: SetHelloCalledEvent): void {
  let entity = new SetHelloCalled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.message = event.params.message
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
