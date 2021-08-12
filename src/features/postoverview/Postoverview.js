import { Card } from '../card/Card';
import { SimpleGrid } from '@chakra-ui/react';

export function Postoverview() {
    return(
        <SimpleGrid columns={[1, 2, 3]}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SimpleGrid>
    )
}