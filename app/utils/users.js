
// @flow

export function isInRole(roles, inRole) {
    if (roles) {
        var parts = roles.split(' ');
        for (var i = 0; i < parts.length; i++) {
            if (parts[i] === inRole) {
                return true;
            }
        }
    }

    return false;
}

export function isGuest(user) {
    if (user && user.roles && isInRole(user.roles, 'system_guest')) {
        return true;
    }
    return false;
}
