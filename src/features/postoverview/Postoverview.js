import { Card } from '../card/Card';
import { SimpleGrid } from '@chakra-ui/react';

export function Postoverview() {
    return(
        <SimpleGrid columns={[1, 2, 3]} spacing="20px">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SimpleGrid>
    )
}