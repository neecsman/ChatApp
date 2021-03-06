import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

const Time = ({ date }) =>
  formatDistanceToNow(date, { locale: ru, addSuffix: true });

Time.propTypes = {
  date: PropTypes.object,
};
export default Time;
