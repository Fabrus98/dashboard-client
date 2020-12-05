import { gql } from '@apollo/client';

export const updateGuildPrefixMutation = gql`
    mutation UpdateGuildPrefix($guildId: String!, $prefix: String) {
        updateGuildPrefix(guildId: $guildId, prefix: $prefix) {
            prefix
            guildId
        }
    }
`;

export const updateRuoloMutedIDMutation = gql`
    mutation UpdateRuoloMutedID($guildId: String!, $ruoloMutedID: String) {
        updateRuoloMutedID(guildId: $guildId, ruoloMutedID: $ruoloMutedID) {
            ruoloMutedID
            guildId
        }
    }
`;