import Image from 'next/image'
import Link from 'next/link'
import {Grid, Heading, Icon, Progress, Tag, Text} from '@chakra-ui/react'
import {BadgeCheckIcon} from '@heroicons/react/solid'
import differenceInDays from 'date-fns/differenceInDays'
import formatCurrency from '@lib/formatCurrency'

const imgLoader = ({src}) => {
  return src
}

const DonationCard = ({
  id = 0,
  name = 'Donation name',
  fundraiser = 'Fundraiser',
  amount = 0,
  target_amount = 100,
  deadline = 0,
  status,
  category = 'donation',
  image = {
    src: 'https://via.placeholder.com/280x155?text=Donation+Image',
    alt: 'Alt Image',
    width: 280,
    height: 155,
  },
}) => {
  return (
    <Link href={`donation/${id}`}>
      <a>
        <Grid
          gap="3"
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="6"
          textAlign="left"
          height="fit-content"
        >
          <Image
            loader={imgLoader}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <Grid
            alignItems="center"
            justifyContent="space-between"
            gap="4"
            autoFlow="column"
          >
            <Tag>{category}</Tag>
            {status != '' && status === 'Pending' ? (
              <Tag variant="solid" colorScheme="yellow">
                {status}
              </Tag>
            ) : (
              ''
            )}
            {status != '' && status === 'Rejected' ? (
              <Tag variant="solid" colorScheme="red">
                {status}
              </Tag>
            ) : (
              ''
            )}
            {status != '' && status === 'Completed' ? (
              <Tag variant="solid" colorScheme="green">
                {status}
              </Tag>
            ) : (
              ''
            )}
            {status != '' && status === 'Verified' ? (
              <Tag variant="solid" colorScheme=" blue">
                {status}
              </Tag>
            ) : (
              ''
            )}
          </Grid>
          <Heading as="h4" size="md">
            {name}
          </Heading>
          <Grid
            autoFlow="column dense"
            autoColumns="min-content min-content"
            gap="2"
            alignItems="center"
          >
            <Text as="strong" size="md" color="gray.700" width="min-content">
              {fundraiser}
            </Text>
            <Icon as={BadgeCheckIcon} fill="blue.400" boxSize="5" />
          </Grid>
          <Progress
            colorScheme="green"
            value={amount}
            max={target_amount}
            size="sm"
            borderRadius="3"
          />
          <Grid
            autoFlow="column dense"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid spacing="1">
              <Text fontSize="sm" color="gray.600">
                Terkumpul
              </Text>
              <Text as="strong" fontSize="lg" color="green">
                {formatCurrency(amount).slice(0, -3)}
              </Text>
            </Grid>
            <Grid textAlign="right" gap="1">
              <Text fontSize="sm" color="gray.600">
                Sisa hari
              </Text>
              <Text as="strong" fontSize="lg" color="gray.700">
                {differenceInDays(new Date(deadline), new Date())}
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </a>
    </Link>
  )
}

export default DonationCard
