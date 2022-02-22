
interface Team {
    name : string,
    alias: string
}

const data: Team[] = [
    {
        name: 'Chelsea F.C.',
        alias: 'Blues'
    },
    {
        name: 'Real Madrid',
        alias: 'Merengues'
    },
    {
        name: 'Atletico de Madrid',
        alias: 'Colchoneros'
    },
    {
        name: 'Atletico Nacional',
        alias: 'Panaderos'
    }
];

function getInfo( teams: Team[],
                  fn: (b: string[]) => void ) {

    const teamsInfo: string[] = teams.map( team => `Team: ${ team.name } mas conocido como ${ team.alias }` );
    fn( teamsInfo );
}

function show( teams: string[] ): void {
    teams.forEach( team => console.log( team ) );
}

function showToUpper( teams: string[] ): void {
    teams.forEach( team => console.log( team.toUpperCase() ) );
}

function showOrdered( teams: string[] ): void {
   teams.sort()
    .forEach( (team, index) => console.log(`${ index + 1}. ${ team }`))
}

getInfo( data, show );
getInfo( data, showToUpper );
getInfo( data, showOrdered );

