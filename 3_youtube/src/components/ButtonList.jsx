import Button from './Button';

function ButtonList() {
  const list = [
    'All',
    'Podcasts',
    'Gaming',
    'Music',
    'Live',
    'Sports',
    'News',
    'Shopping',
    'Fashion & Beauty',
    'Courses',
  ];
  return (
    <div>
      <div className="flex">
        {list.map((btn, index) => (
          <Button name={btn} key={index} />
        ))}
        {/* <Button name="All" />
      <Button name="Podcasts" />
      <Button name="Gaming" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="Sports" />
      <Button name="News" />
      <Button name="Shopping" />
      <Button name="Fashion & Beauty" />
      <Button name="Courses" /> */}
      </div>
    </div>
  );
}

export default ButtonList;
