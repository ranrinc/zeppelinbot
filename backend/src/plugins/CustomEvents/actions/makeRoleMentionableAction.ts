import { Snowflake } from "discord.js";
import * as t from "io-ts";
import { GuildPluginData } from "knub";
import { TemplateSafeValueContainer } from "../../../templateFormatter";
import { convertDelayStringToMS, noop, tDelayString } from "../../../utils";
import { ActionError } from "../ActionError";
import { CustomEventsPluginType, TCustomEvent } from "../types";

export const MakeRoleMentionableAction = t.type({
  type: t.literal("make_role_mentionable"),
  role: t.string,
  timeout: tDelayString,
});
export type TMakeRoleMentionableAction = t.TypeOf<typeof MakeRoleMentionableAction>;

export async function makeRoleMentionableAction(
  pluginData: GuildPluginData<CustomEventsPluginType>,
  action: TMakeRoleMentionableAction,
  values: TemplateSafeValueContainer,
  event: TCustomEvent,
  eventData: any,
) {
  const role = pluginData.guild.roles.cache.get(action.role as Snowflake);
  if (!role) {
    throw new ActionError(`Unknown role: ${role}`);
  }

  await role.setMentionable(true, `Custom event: ${event.name}`);

  const timeout = convertDelayStringToMS(action.timeout)!;
  setTimeout(() => {
    role.setMentionable(false, `Custom event: ${event.name}`).catch(noop);
  }, timeout);
}
