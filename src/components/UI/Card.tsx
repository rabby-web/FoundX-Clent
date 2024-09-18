/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card as NextUiCard,
  CardHeader,
  CardFooter,
  CardBody,
} from "@nextui-org/card";

const Card = ({ post }) => {
  const { title, category, image, city, dateFound, _id } = post || {};

  return (
    <NextUiCard className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {/* <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
          height={200}
        /> */}
      </CardBody>
    </NextUiCard>
  );
};

export default Card;
