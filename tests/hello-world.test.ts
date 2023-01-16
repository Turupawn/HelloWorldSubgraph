import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { SetHelloCalled } from "../generated/schema"
import { SetHelloCalled as SetHelloCalledEvent } from "../generated/HelloWorld/HelloWorld"
import { handleSetHelloCalled } from "../src/hello-world"
import { createSetHelloCalledEvent } from "./hello-world-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let message = "Example string value"
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newSetHelloCalledEvent = createSetHelloCalledEvent(message, sender)
    handleSetHelloCalled(newSetHelloCalledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("SetHelloCalled created and stored", () => {
    assert.entityCount("SetHelloCalled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "SetHelloCalled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "message",
      "Example string value"
    )
    assert.fieldEquals(
      "SetHelloCalled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
