const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Group = require('../models/Group');

// @desc   Get all groups
// @route  Get /api/v1/groups
// @access Public
exports.getGroups = asyncHandler (async (req, res, next) => {
const groups = await Group.find();
   res.status(200).json({ success: true, data: groups});
  
});

// @desc      Get single group
// @route     GET /api/v1/groups/:id
// @access    Public
exports.getGroup = asyncHandler (async (req, res, next) => {
  
  const group = await Group.findById(req.params.id);

  if (!group) {
    return next(
      new ErrorResponse(`Group not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: group });


});

// @desc   Create new group
// @route  POST /api/v1/group
// @access Public

exports.createGroup = asyncHandler (async (req, res, next) => {
 
    const group = await Group.create(req.body);

    res.status(201).json({
        success: true,
        data: group
  });
   
  });