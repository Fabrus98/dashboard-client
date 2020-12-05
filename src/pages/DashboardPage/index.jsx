import React from 'react';
import { DashboardMenu } from '../../components';
import { useQuery, useMutation } from "@apollo/client"
import { dashboardPageQuery } from '../../graphql/queries';
import { updateGuildPrefixMutation, updateRuoloMutedIDMutation } from '../../graphql/mutations';

export function DashboardPage( {
    history,
    match,
}) {

    const { loading, error, data } = useQuery(dashboardPageQuery, { variables: { guildId: match.params.id}});
    const [ updatePrefix ] = useMutation(updateGuildPrefixMutation);
    const [ updateRuoloMutedID ] = useMutation(updateRuoloMutedIDMutation);

    const updateGuildPrefixParent = async (prefix) => {
        try {
            const response = await updatePrefix({
                variables: {
                    guildId: match.params.id,
                    prefix,
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    const updateRuoloMutedParent = async (roleId) => {
        try {
            console.log("passa qui");
            const response = await updateRuoloMutedID({
                variables: {
                    guildId: match.params.id,
                    ruoloMutedID: roleId,
                }
            });
        } catch (err) {
            console.log(err);
        }
        console.log(roleId);
    }

    if(!loading && !error) {
        const {
            getGuildConfig,
            getGuildRoles,
            getUser,
        } = data;
        const rolesArray = getGuildRoles.filter((role) => role.id !== match.params.id);
        return (
            <div>
                <DashboardMenu
                user={getUser}
                config={getGuildConfig}
                roles={rolesArray}
                updatePrefix={updateGuildPrefixParent}
                updateRuoloMuted={updateRuoloMutedParent}
                />
            </div>
        )
    } return <h1>Loading...</h1>
}