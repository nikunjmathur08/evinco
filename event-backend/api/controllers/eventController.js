const Event = require('../models/event.js');
// Create Event
exports.createEvent = async (req, res, next) => {
  const newEvent = new Event(req.body);

  try {
    const savedEvent = await newEvent.save();
    if (!savedEvent) {
      return next(createError(400, "Event could not be created!"));
    }
    res.status(200).json({ message:"Event Created successfully.", details: savedEvent});
  } catch (err) {
    next(err);
  }
};
//all events in HomePage
exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find().limit(8);
    if(!events) return next(createError(404, "No events found!"));
    res.status(200).json(events);
  } catch (err) {
    next(err);
  }
};
//event by category in Homepage
exports.getEventbyCategory = async (req, res, next) => {  
  try {
    const events = await Event.find({ category: req.params.category }).limit(8);
    if(events.length==0) {
      res.status(200).json({message: "No events found!"});
        }
    else {
    res.status(200).json(events); }
  } catch (err) {
    next(err);
  }
};
// one event details
exports.getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return next(createError(404, "Event not found!"));
    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};
// past and upcoming events
exports.getPastEvents = async (req, res, next) => {
  try{
    const events = await Event.find({
      category: req.params.category,
      date: { $lte: new Date() } }).sort({ date: 1 }).limit(4);
      if(events.length==0) {
        res.status(200).json({message: "No events found!"});
          }
      else {
      res.status(200).json(events); }
  } catch (err) {
    next(err);
  }
};

exports.getUpcomingEvents = async (req, res, next) => {
  try {
    const events = await Event.find({
    category: req.params.category,  
    date: { $gt: new Date() } }).sort({ date: 1 }).limit(4);
    if(events.length==0) {
      res.status(200).json({message: "No events found!"});
        }
    else {
    res.status(200).json(events); }
  } catch (err) {
    next(err);
  }
};