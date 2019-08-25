const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all associate contacts');
});

// @route   POST api/contacts
// @desc    New users contacts
// @access  Private
router.post('/', (req, res) => {
    res.send('add contact');
});

// @route   PUT api/contacts/:id
// @desc    update contacts
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update contacts');
});

// @route   DELETE api/contacts/:id
// @desc    DELETE contacts
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('delete contacts');
});


module.exports = router;
